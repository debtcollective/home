# This is used by Netlify via netlify.toml to set environment variables for specific environments
build-development:
	sed -i "s|REPLACE_GATSBY_STRIPE_PUBLIC_TOKEN|${GATSBY_DEVELOPMENT_STRIPE_PUBLIC_TOKEN}|" netlify.toml && yarn build
