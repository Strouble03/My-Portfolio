// app.js: safe DOM load (scripts are placed after HTML, but we still guard)
(function () {
  const D = window.PORTFOLIO || {};
  if (!D.basics) return;

  // Header
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('name', D.basics.name);
  setText('nameCopy', D.basics.name);
  setText('title', D.basics.title);
  setText('summary', D.basics.summary);
  setText('emailText', D.basics.email);
  setText('phoneText', D.basics.phone);

  const maybeSetHref = (id, url) => {
    const a = document.getElementById(id);
    if (a && url) a.href = url;
  };
  maybeSetHref('linkedin', D.basics.linkedin);
  maybeSetHref('github', D.basics.github);
  maybeSetHref('email', 'mailto:' + (D.basics.email || ''));

  // Skills
  const skillsWrap = document.getElementById('skills');
  if (skillsWrap && Array.isArray(D.skills)) {
    D.skills.forEach(s => {
      const sp = document.createElement('span'); sp.className='chip'; sp.textContent = s;
      skillsWrap.appendChild(sp);
    });
  }

  // Tools
  const toolsWrap = document.getElementById('tools');
  if (toolsWrap && Array.isArray(D.tools)) {
    D.tools.forEach(t => {
      const sp = document.createElement('span'); sp.className='chip'; sp.textContent = t;
      toolsWrap.appendChild(sp);
    });
  }

  // Certs
  const certs = document.getElementById('certs');
  if (certs && Array.isArray(D.certifications)) {
    D.certifications.forEach(c => {
      const li = document.createElement('li'); li.textContent = c; certs.appendChild(li);
    });
  }

  // Experience
  const exp = document.getElementById('experience');
  if (exp && Array.isArray(D.experience)) {
    D.experience.forEach(e => {
      const div = document.createElement('div'); div.className='item';
      const h = document.createElement('h4'); h.textContent = e.role + ' — ' + e.company; div.appendChild(h);
      const meta = document.createElement('div'); meta.className='meta'; meta.textContent = e.location + ' • ' + e.period; div.appendChild(meta);
      if (Array.isArray(e.highlights)) {
        const ul = document.createElement('ul');
        e.highlights.forEach(hlt => { const li = document.createElement('li'); li.textContent = hlt; ul.appendChild(li); });
        div.appendChild(ul);
      }
      exp.appendChild(div);
    });
  }

  // Projects
  const proj = document.getElementById('projects');
  if (proj && Array.isArray(D.projects)) {
    D.projects.forEach(p => {
      const div = document.createElement('div'); div.className='item';
      const h = document.createElement('h4'); h.textContent = p.name + ' • ' + p.period; div.appendChild(h);
      const pNode = document.createElement('p'); pNode.textContent = p.summary; div.appendChild(pNode);
      if (Array.isArray(p.tech)) {
        const tech = document.createElement('div'); tech.className='chips';
        p.tech.forEach(t => { const s = document.createElement('span'); s.className='chip'; s.textContent = t; tech.appendChild(s); });
        div.appendChild(tech);
      }
      proj.appendChild(div);
    });
  }

  // Test cases & bugs
  const cases = document.getElementById('test-cases');
  if (cases && D.testArtifacts && Array.isArray(D.testArtifacts.testCases)) {
    D.testArtifacts.testCases.forEach(tc => {
      const div = document.createElement('div'); div.className='item';
      const h = document.createElement('h4'); h.textContent = tc.title; div.appendChild(h);
      if (tc.note) { const meta = document.createElement('div'); meta.className='meta'; meta.textContent = tc.note; div.appendChild(meta); }
      cases.appendChild(div);
    });
  }
  const bugs = document.getElementById('bug-reports');
  if (bugs && D.testArtifacts && Array.isArray(D.testArtifacts.bugReports)) {
    D.testArtifacts.bugReports.forEach(b => {
      const div = document.createElement('div'); div.className='item';
      const h = document.createElement('h4'); h.textContent = (b.id ? b.id + ' — ' : '') + b.title; div.appendChild(h);
      if (b.severity) { const meta = document.createElement('div'); meta.className='meta'; meta.textContent = 'Severity: ' + b.severity; div.appendChild(meta); }
      bugs.appendChild(div);
    });
  }

  // Print button
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
})();
