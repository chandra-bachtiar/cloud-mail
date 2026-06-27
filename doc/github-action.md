## GitHub Action Deployment

**Configure GitHub Repository**

1. Fork or clone the repository [https://github.com/eoao/cloud-mail](https://github.com/eoao/cloud-mail)
2. Go to your GitHub repository settings
3. Navigate to Settings → Secrets and variables → Actions → New Repository secrets
4. Add the following Secrets:

| Secret Name             | Required | Purpose                                                  |
| ----------------------- | :--: | ----------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  |  ✅  | Cloudflare API token (requires Workers and related resource permissions) |
| `CLOUDFLARE_ACCOUNT_ID` |  ✅  | Cloudflare account ID                                    |
| `D1_DATABASE_ID`        |  ✅  | Your D1 database ID                                     |
| `KV_NAMESPACE_ID`       |  ✅  | Your KV namespace ID                                   |
| `R2_BUCKET_NAME`        |  ✅  | Your R2 bucket name                                    |
| `DOMAIN`                |  ✅  | The domain(s) for your email service (e.g. `["xx.xx"]`, separate multiple domains with commas) |
| `ADMIN`                 |  ✅  | Your admin email address (e.g. `admin@example.com`)      |
| `JWT_SECRET`            |  ✅  | A long random string for generating and verifying JWTs                     |
| `INIT_URL`              |  ❌  | (Optional) Worker URL for initializing the database after deployment (see manual init steps below) |

---

**Get Cloudflare API Token**

1. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Create a new API token
3. Select the "Edit Cloudflare Workers" template and add the corresponding permissions as shown below
   ![dc2e1dc8dcd217644759c46c6c705de1](https://i.miji.bid/2025/07/07/dc2e1dc8dcd217644759c46c6c705de1.png)
4. Save the token and copy it to `CLOUDFLARE_API_TOKEN` in GitHub Secrets

**Get Cloudflare Account ID**
1. The account ID can be found in your Cloudflare dashboard account settings.
2. Copy it to `CLOUDFLARE_ACCOUNT_ID` in GitHub Secrets

**Run Workflow**
1. Manually trigger the workflow from the Actions page. After syncing with upstream, it will automatically deploy to Cloudflare Workers. If `INIT_URL` is not configured, manually visit `https://your-project-domain/api/init/your_jwt_secret` to initialize the database.
2. To auto-sync from upstream, use a bot or manually click the Sync Upstream button.
