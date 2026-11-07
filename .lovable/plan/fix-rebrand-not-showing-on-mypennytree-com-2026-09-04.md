# Fix: Rebrand not showing on mypennytree.com

## Diagnosis
The live site `https://mypennytree.com` is still serving the previous deployment. A fetch of the homepage confirms it still shows "PennyTree" and "Get PennyTree" instead of the updated "PennyTree Technologies" copy.

Lovable deploys frontend changes (TSX/HTML copy) only when you click **Update** in the Publish dialog. Clicking Publish or opening the dialog is not enough — the updated build must be explicitly pushed to the live deployment.

## Action required (no code change)
1. Open the **Publish** dialog in the editor.
2. Click the **Update** button to push the latest frontend build live.
3. Wait about 60 seconds for the deployment to propagate.
4. Hard-refresh or clear browser cache on `mypennytree.com` and verify the new branding.

## Verification
After updating, the homepage hero, navigation, footer, and legal pages should read "PennyTree Technologies" instead of "PennyTree".