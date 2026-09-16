import { test, expect } from '@playwright/test';

test.describe('SWK502 Aisyah Case Study Web Platform', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page loads correctly with header, badge, and hero proposition', async ({ page }) => {
    await expect(page).toHaveTitle(/SWK502 Aisyah Case Study/i);
    
    // Check Distinction badge in hero section
    await expect(page.getByTestId('hero-section').getByText('DISTINCTION DEFENCE')).toBeVisible();
    
    // Check main title
    await expect(page.getByRole('heading', { name: /ABSENT FROM SCHOOL/i })).toBeVisible();
    
    // Check Central Proposition
    await expect(page.getByText(/Central Proposition/i).first()).toBeVisible();
    await expect(page.getByText(/D2’s absconding may function as an immediate escape from relational strain/i).first()).toBeVisible();
    
    // Check 4 stat tiles
    await expect(page.getByTestId('stat-tile-0')).toBeVisible();
    await expect(page.getByTestId('stat-tile-1')).toBeVisible();
    await expect(page.getByTestId('stat-tile-2')).toBeVisible();
    await expect(page.getByTestId('stat-tile-3')).toBeVisible();
  });

  test('PDF Download Dropdown: Selects and triggers file download for genogram and SWK502 PDFs', async ({ page }) => {
    const downloadContainer = page.getByTestId('pdf-download-container').first();
    await expect(downloadContainer).toBeVisible();

    const dropdownTrigger = page.getByTestId('pdf-dropdown-trigger').first();
    const downloadSubmit = page.getByTestId('pdf-download-submit').first();

    // 1. Test genogram single-page PDF download on submit
    const downloadPromise1 = page.waitForEvent('download');
    await downloadSubmit.click();
    const downloadFile1 = await downloadPromise1;
    expect(downloadFile1.suggestedFilename()).toBe('genogram-aisyah-family.pdf');

    // Check toast feedback
    await expect(page.getByTestId('download-success-toast').first()).toBeVisible();

    // 2. Open dropdown and select full presentation deck PDF
    await dropdownTrigger.click();
    const optionSWK = page.getByTestId('pdf-option-SWK502_Aisyah_Case_Study').first();
    await expect(optionSWK).toBeVisible();

    // Clicking the item triggers download directly
    const downloadPromise2 = page.waitForEvent('download');
    await optionSWK.click();
    const downloadFile2 = await downloadPromise2;
    expect(downloadFile2.suggestedFilename()).toBe('SWK502_Aisyah_Case_Study.pdf');
  });

  test('Search with auto text suggestions / completions and keyboard navigation', async ({ page }) => {
    // Open search modal via button
    const searchTrigger = page.getByTestId('search-trigger-button');
    await searchTrigger.click();

    const searchModal = page.getByTestId('search-modal');
    await expect(searchModal).toBeVisible();

    const searchInput = page.getByTestId('search-input');
    await expect(searchInput).toBeFocused();

    // Type query "bersama"
    await searchInput.fill('bersama');

    // Verify auto suggestions filter
    const suggestions = page.getByTestId('search-results-list');
    await expect(suggestions).toContainText('BERSAMA 16-Week Dual-Focus Intervention');

    // Click on BERSAMA suggestion
    const bersamaOption = page.getByTestId('search-suggestion-s-bersama');
    await bersamaOption.click();

    // Search modal should close
    await expect(searchModal).not.toBeVisible();

    // Verify scrolled to BERSAMA section
    await expect(page.getByTestId('bersama-section')).toBeVisible();
  });

  test('Interactive Genogram & Eco-Map Visualizer tabs and inspectors', async ({ page }) => {
    const visualizer = page.getByTestId('visualizer-section');
    await expect(visualizer).toBeVisible();

    // Default tab is Genogram
    await expect(page.getByTestId('tab-genogram')).toHaveClass(/bg-sky-500/);
    await expect(page.getByTestId('selected-member-card')).toBeVisible();

    // Click member Aisyah
    await page.getByTestId('member-button-aisyah').click();
    await expect(page.getByTestId('selected-member-card')).toContainText('Aisyah');
    await expect(page.getByTestId('selected-member-card')).toContainText('Index Carer & Mother');

    // Click member D1
    await page.getByTestId('member-button-d1').click();
    await expect(page.getByTestId('selected-member-card')).toContainText('D1');
    await expect(page.getByTestId('selected-member-card')).toContainText('Parentified');

    // Switch to Eco-Map tab
    await page.getByTestId('tab-ecomap').click();
    await expect(page.getByTestId('tab-ecomap')).toHaveClass(/bg-sky-500/);
    await expect(page.getByTestId('selected-node-card')).toBeVisible();

    // Click node FSC
    await page.getByTestId('node-button-fsc').click();
    await expect(page.getByTestId('selected-node-card')).toContainText('Family Service Centre');

    // Click node SSO / ComCare
    await page.getByTestId('node-button-sso-comcare').click();
    await expect(page.getByTestId('selected-node-card')).toContainText('MSF SSO / ComCare');
  });

  test('Chronosystem stepped timeline interactive exploration', async ({ page }) => {
    const chronosystem = page.getByTestId('chronosystem-section');
    await expect(chronosystem).toBeVisible();

    // Click year 2002 step
    await page.getByTestId('timeline-step-0').click();
    await expect(page.getByTestId('selected-timeline-event')).toContainText('Paternal Departure');

    // Click year 2010 step
    await page.getByTestId('timeline-step-3').click();
    await expect(page.getByTestId('selected-timeline-event')).toContainText('Stepfather Injured');
  });

  test('Functional Theory sub-tabs: Pillars, Techniques, Evaluation', async ({ page }) => {
    const theorySection = page.getByTestId('functional-theory-section');
    await expect(theorySection).toBeVisible();

    // Default is 6 pillars
    await expect(page.getByTestId('pillars-grid')).toBeVisible();
    await expect(page.getByText('1. The Will and Human Agency')).toBeVisible();

    // Switch to Techniques
    await page.getByTestId('tab-theory-techniques').click();
    await expect(page.getByTestId('techniques-grid')).toBeVisible();
    await expect(page.getByText('1. Focus on the Here and Now')).toBeVisible();

    // Switch to Evaluation
    await page.getByTestId('tab-theory-evaluation').click();
    await expect(page.getByTestId('evaluation-grid')).toBeVisible();
    await expect(page.getByText('Critical Evaluation: Strengths')).toBeVisible();
    await expect(page.getByText('Critical Evaluation: Limitations')).toBeVisible();
  });

  test('BERSAMA 16-week phase roadmap navigation and filtering', async ({ page }) => {
    const bersama = page.getByTestId('bersama-section');
    await expect(bersama).toBeVisible();

    // Switch phases
    await page.getByTestId('phase-tab-reframe').click();
    await expect(bersama).toContainText('Phase 1: Reframe');

    await page.getByTestId('phase-tab-change').click();
    await expect(bersama).toContainText('Phase 2: Change');

    // Filter tracks
    await page.getByTestId('filter-person').click();
    await expect(bersama.getByText(/Person-Directed Track/i)).toBeVisible();
  });

  test('Measurement Dashboard interactive simulation and feedback rule', async ({ page }) => {
    const measurement = page.getByTestId('measurement-section');
    await expect(measurement).toBeVisible();

    // Verify 5 domain cards
    for (let i = 0; i < 5; i++) {
      await expect(page.getByTestId(`domain-card-${i}`)).toBeVisible();
    }

    // Verify Slide 14 feedback rule
    await expect(measurement.getByText(/Slide 14 Feedback Rule/i)).toBeVisible();
  });

  test('Presentation Slide Deck Mode: 28 slides navigation and controls', async ({ page }) => {
    // Switch to slides mode
    await page.getByTestId('mode-toggle-slides').click();

    const deckContainer = page.getByTestId('slide-deck-container');
    await expect(deckContainer).toBeVisible();
    await expect(page.getByTestId('slide-view-1')).toBeVisible();

    // Next slide
    await page.getByTestId('btn-next-slide').click();
    await expect(page.getByTestId('slide-view-2')).toBeVisible();
    await expect(deckContainer).toContainText('Case at a glance');

    // Previous slide
    await page.getByTestId('btn-prev-slide').click();
    await expect(page.getByTestId('slide-view-1')).toBeVisible();

    // Open grid overview and jump to Slide 15
    await page.getByTestId('toggle-thumbnails').click();
    await expect(page.getByTestId('thumbnails-modal')).toBeVisible();

    await page.getByTestId('thumb-slide-15').click();
    await expect(page.getByTestId('slide-view-15')).toBeVisible();
    await expect(deckContainer).toContainText('BERSAMA: a 16-week dual-focus intervention');

    // Toggle speaker notes
    await page.getByTestId('toggle-speaker-notes').click();
    await expect(page.getByTestId('speaker-notes-container')).toBeVisible();

    // Switch back to Case Portal mode
    await page.getByTestId('mode-toggle-portal').click();
    await expect(page.getByTestId('hero-section')).toBeVisible();
  });
});
