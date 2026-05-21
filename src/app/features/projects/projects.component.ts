import { Component, signal, computed, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  industryId: string;
  industry: string;
  title: string;
  desc: string;
  tags: string[];
  size: 'sm' | 'md' | 'lg';
  color: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  activeFilter = signal('all');

  industries = [
    { id: 'retail',       label: 'Retail' },
    { id: 'automotive',   label: 'Automotive' },
    { id: 'manufacturing',label: 'Manufacturing' },
    { id: 'services',     label: 'Services' },
    { id: 'construction', label: 'Construction' },
    { id: 'ecommerce',    label: 'E-commerce' },
  ];

  projects: Project[] = [
    {
      id: 'p1', industryId: 'retail', industry: 'Retail',
      title: 'Unified Retail ERP',
      desc: 'End-to-end ERP managing 70+ branches with real-time inventory, POS integration, and business analytics.',
      tags: ['ERP', 'POS', 'Analytics'], size: 'lg', color: '#f37021'
    },
    {
      id: 'p2', industryId: 'retail', industry: 'Retail',
      title: 'HR Workforce Platform',
      desc: 'NAS HR system for 300+ retail employees with payroll, attendance tracking, and performance management.',
      tags: ['HR Software', 'Mobile'], size: 'sm', color: '#f37021'
    },
    {
      id: 'p3', industryId: 'automotive', industry: 'Automotive',
      title: 'Dealership Management Suite',
      desc: 'Complete dealership operations platform with CRM, service scheduling, parts inventory, and financial reporting.',
      tags: ['ERP', 'CRM', 'Web App'], size: 'md', color: '#1d6fa5'
    },
    {
      id: 'p4', industryId: 'automotive', industry: 'Automotive',
      title: 'Fleet Tracking App',
      desc: 'Mobile-first fleet management with GPS tracking, maintenance scheduling, and driver performance analytics.',
      tags: ['Mobile App', 'IoT'], size: 'sm', color: '#1d6fa5'
    },
    {
      id: 'p5', industryId: 'manufacturing', industry: 'Manufacturing',
      title: 'Production Intelligence Platform',
      desc: 'Smart manufacturing ERP with production planning, quality control, BOM management, and supply chain optimization.',
      tags: ['ERP', 'Analytics', 'IoT'], size: 'lg', color: '#00613e'
    },
    {
      id: 'p6', industryId: 'manufacturing', industry: 'Manufacturing',
      title: 'Supply Chain Portal',
      desc: 'Supplier management web portal with order tracking, procurement workflows, and compliance reporting.',
      tags: ['Web Dev', 'ERP'], size: 'sm', color: '#00613e'
    },
    {
      id: 'p7', industryId: 'services', industry: 'Services',
      title: 'Field Service Platform',
      desc: 'Mobile-first field service management with job dispatch, scheduling, real-time reporting, and invoicing.',
      tags: ['Mobile App', 'ERP', 'HR'], size: 'md', color: '#8b4ca0'
    },
    {
      id: 'p8', industryId: 'services', industry: 'Services',
      title: 'Client Service Portal',
      desc: 'Customer-facing web portal with service requests, ticket management, and self-service dashboards.',
      tags: ['Web Dev', 'CRM'], size: 'sm', color: '#8b4ca0'
    },
    {
      id: 'p9', industryId: 'construction', industry: 'Construction',
      title: 'Project Operations Suite',
      desc: 'Construction project management with budgeting, resource allocation, subcontractor tracking, and compliance.',
      tags: ['ERP', 'Web App', 'Analytics'], size: 'md', color: '#c8930a'
    },
    {
      id: 'p10', industryId: 'ecommerce', industry: 'E-commerce',
      title: 'F&B Ordering Platform',
      desc: 'Comprehensive food & beverage e-commerce with online ordering, delivery tracking, and loyalty program integration.',
      tags: ['Web Dev', 'Mobile App', 'ERP'], size: 'lg', color: '#d94f38'
    },
    {
      id: 'p11', industryId: 'ecommerce', industry: 'E-commerce',
      title: 'Multi-Vendor Marketplace',
      desc: 'Scalable multi-vendor platform with integrated payments, logistics management, analytics, and vendor dashboards.',
      tags: ['Web Dev', 'Mobile App'], size: 'md', color: '#d94f38'
    },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.industryId === f);
  });

  setFilter(id: string) {
    this.activeFilter.set(id);
    setTimeout(() => {
      gsap.from('.proj-card', {
        opacity: 0, y: 30, duration: 0.5, stagger: 0.06, ease: 'power3.out'
      });
    }, 10);
  }

  ngAfterViewInit() {
    gsap.from('.projects-head > *', {
      scrollTrigger: { trigger: '.projects', start: 'top 75%' },
      opacity: 0, y: 30, duration: 0.8, stagger: 0.12, ease: 'power3.out'
    });
    gsap.from('.proj-filters', {
      scrollTrigger: { trigger: '.proj-filters', start: 'top 85%' },
      opacity: 0, y: 20, duration: 0.6, ease: 'power3.out'
    });
    gsap.from('.proj-card', {
      scrollTrigger: { trigger: '.proj-grid', start: 'top 80%' },
      opacity: 0, y: 40, duration: 0.7, stagger: 0.07, ease: 'power3.out'
    });
  }
}
