# This is used by Netlify via netlify.toml to set environment variables for specific environments
build-development:
	sed -i s/GATSBY_STRIPE_PUBLIC_TOKEN=\"\"/GATSBY_STRIPE_PUBLIC_TOKEN=\"${GATSBY_DEVELOPMENT_STRIPE_PUBLIC_TOKEN}\"/g netlify.toml && \
	yarn build
