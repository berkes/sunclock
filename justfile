esbuild := "./node_modules/.bin/esbuild"

esbuild_srcs := "src/main.ts src/index.html src/style.css"
esbuild_opts := "--bundle --outdir=dist --sourcemap --log-level=info --loader:.html=copy --loader:.css=copy"

# Build, watch for changes, and serve at http://localhost:3000 with live reload (default)
default: dev

# Install all Node dependencies via yarn
install:
    yarn install

# Compile TypeScript and copy HTML/CSS to dist/
build:
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}} --define:window.IS_PRODUCTION=true

# Watch src/ for changes and rebuild (no server)
watch:
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}} --watch=forever

# Serve at http://localhost:3000 with live reload
dev:
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}} --watch --servedir=dist --serve=3000
