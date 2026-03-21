import './style.css'
import { marked } from 'marked'

const README_URL = 'https://raw.githubusercontent.com/TanNguyen20/TanNguyen20/main/README.md'
const PDF_URL = 'https://raw.githubusercontent.com/TanNguyen20/TanNguyen20/main/fullstack.pdf'
const GITHUB_URL = 'https://github.com/TanNguyen20'
const LINKEDIN_URL = 'https://www.linkedin.com/in/tannguyen20/'

// SVG Icons
const icons = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>`,
}

// Build the page layout
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
    ${icons.menu}
  </button>
  <div class="sidebar-overlay" id="sidebar-overlay"></div>

  <aside class="sidebar" id="sidebar">
    <div class="profile-image-wrapper">
      <img src="/images/tannguyen.jpg" alt="Tan Nguyen" class="profile-image" />
    </div>

    <div class="profile-info">
      <h1 class="profile-name">Tan Nguyen</h1>
      <p class="profile-title">Full Stack Developer</p>
    </div>

    <div class="status-badge">
      <span class="status-dot"></span>
      Available for opportunities
    </div>

    <div class="sidebar-divider"></div>

    <nav class="sidebar-links">
      <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="sidebar-link" id="github-link">
        ${icons.github}
        <span>GitHub</span>
      </a>
      <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer" class="sidebar-link" id="linkedin-link">
        ${icons.linkedin}
        <span>LinkedIn</span>
      </a>
      <a href="mailto:nguyennhattan.work@gmail.com" class="sidebar-link" id="email-link">
        ${icons.email}
        <span>Send email to me</span>
      </a>
    </nav>

    <button class="download-btn" id="download-pdf-btn">
      ${icons.download}
      <span>Download CV (PDF)</span>
    </button>
  </aside>

  <main class="main-content">
    <header class="page-header">
      <h1>Profile & Resume</h1>
      <p>Fetched live from GitHub — always up to date</p>
    </header>
    <div class="markdown-body" id="markdown-content">
      <div class="loading">
        <div class="spinner"></div>
        <span>Loading profile...</span>
      </div>
    </div>
  </main>
`

// Fetch and render README.md
async function loadReadme(): Promise<void> {
  const container = document.getElementById('markdown-content')!
  try {
    const response = await fetch(README_URL)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const markdown = await response.text()

    // Configure marked
    marked.setOptions({
      breaks: true,
      gfm: true,
    })

    const html = await marked.parse(markdown)
    container.innerHTML = html
  } catch (error) {
    container.innerHTML = `
      <div class="error-state">
        <p>Failed to load profile content. Please try again later.</p>
        <p style="font-size: 13px; margin-top: 8px; opacity: 0.7;">${error}</p>
      </div>
    `
  }
}

// Download PDF
async function downloadPDF(): Promise<void> {
  const btn = document.getElementById('download-pdf-btn') as HTMLButtonElement
  const originalContent = btn.innerHTML

  try {
    btn.innerHTML = `<div class="spinner" style="width:18px;height:18px;border-width:2px;"></div><span>Downloading...</span>`
    btn.disabled = true

    const response = await fetch(PDF_URL)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const blob = await response.blob()

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'TanNguyen_FullStack_CV.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Failed to download PDF:', error)
    alert('Failed to download PDF. Please try again.')
  } finally {
    btn.innerHTML = originalContent
    btn.disabled = false
  }
}

// Mobile menu toggle
function setupMobileMenu(): void {
  const btn = document.getElementById('mobile-menu-btn')!
  const sidebar = document.getElementById('sidebar')!
  const overlay = document.getElementById('sidebar-overlay')!

  function toggleMenu(): void {
    const isOpen = sidebar.classList.toggle('open')
    overlay.classList.toggle('open', isOpen)
    btn.innerHTML = isOpen ? icons.close : icons.menu
  }

  btn.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)
}

// Init
document.getElementById('download-pdf-btn')!.addEventListener('click', downloadPDF)
setupMobileMenu()
loadReadme()
