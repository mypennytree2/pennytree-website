# Rebrand: Replace "PennyTree" with "PennyTree Technologies"

## Goal
Update all user-facing copy across the website so the brand name reads "PennyTree Technologies" instead of "PennyTree".

## Scope
- Replace "PennyTree" with "PennyTree Technologies" in all display text, headings, paragraphs, buttons, labels, alt text, meta tags, and legal copy.
- This includes the legal entity name: "PennyTree Business Limited" becomes "PennyTree Technologies Business Limited".
- This includes product/program names: e.g. "PennyTree Private Credit" becomes "PennyTree Technologies Private Credit", "PennyTree Referral Program" becomes "PennyTree Technologies Referral Program".

## What stays unchanged
- Domain names and URLs: `mypennytree.com`, `/download`, route paths, etc.
- Email addresses: `support@mypennytree.com` and similar.
- File names and asset paths (e.g. `logo.png`, `pennytree-app-screenshot.png`).
- Internal code identifiers/comments unless they appear in user-facing strings.

## Files affected
Approximately **109 references** across pages and components, including but not limited to:
- `index.html` (title, meta tags, OG/Twitter tags)
- `src/components/Footer.tsx`
- `src/components/Navigation.tsx`
- `src/components/ComplianceBar.tsx`
- `src/pages/Home.tsx`
- `src/pages/About.tsx` / `src/pages/Business.tsx` (team page)
- `src/pages/Products.tsx`
- `src/pages/SendReceive.tsx`
- `src/pages/Vault.tsx`
- `src/pages/ProductLoans.tsx`
- `src/pages/Accounts.tsx`
- `src/pages/Investors.tsx`
- `src/pages/Security.tsx`
- `src/pages/PrivateCredit.tsx`
- `src/pages/Terms.tsx`
- `src/pages/Privacy.tsx`
- `src/pages/ReferralTerms.tsx`
- `src/pages/PersonalVaultTerms.tsx`
- `src/pages/Download.tsx`
- Any other page containing brand references.

## Implementation approach
1. Run a case-sensitive global search for `"PennyTree"` to identify every occurrence.
2. Manually review and replace each occurrence, confirming context:
   - Brand copy → "PennyTree Technologies"
   - Legal entity → "PennyTree Technologies Business Limited"
   - Product names → "PennyTree Technologies [Product Name]"
3. Leave all domains, emails, file paths, and route slugs untouched.
4. Verify no broken alt text, titles, or meta descriptions.

## Verification
1. Run `rg "PennyTree"` to confirm no stray "PennyTree" strings remain in user-facing files.
2. Confirm domains/emails still read `mypennytree.com` / `support@mypennytree.com`.
3. Run a build/typecheck to ensure no JSX/TSX errors were introduced.
4. Spot-check key pages in the preview: Home, Terms, Privacy, Private Credit, Footer, Navigation.
