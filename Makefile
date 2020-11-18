# This is used by Netlify via netlify.toml to set environment variables for specific environments
env-development:
	sed -i s/GATSBY_STRIPE_PUBLIC_TOKEN=""/GATSBY_STRIPE_PUBLIC_TOKEN="${GATSBY_DEVELOPMENT_STRIPE__PUBLIC_TOKEN}"/g netlify.toml
