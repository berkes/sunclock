esbuild      := "./node_modules/.bin/esbuild"
browser_sync := "./node_modules/.bin/browser-sync"

esbuild_srcs := "src/main.ts src/index.html src/style.css"
esbuild_opts := "--bundle --outdir=dist --sourcemap --log-level=info --loader:.html=copy --loader:.css=copy"

# Build and serve with live reload (default)
default: dev

# Install all Node dependencies via yarn
install:
    yarn install

# Compile TypeScript and copy HTML/CSS to dist/
build:
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}}

# Watch src/ for changes and rebuild (no server)
watch:
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}} --watch

# Build, watch for changes, and serve at http://localhost:3000 with live reload
dev: build
    #!/usr/bin/env sh
    {{esbuild}} {{esbuild_srcs}} {{esbuild_opts}} --watch &
    ESBUILD_PID=$!
    trap "kill $ESBUILD_PID 2>/dev/null; exit" INT TERM EXIT
    {{browser_sync}} start --server dist --files dist --no-notify
