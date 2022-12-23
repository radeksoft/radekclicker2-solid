import { Connect, defineConfig, PluginOption } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const forwardOrNext: Connect.NextHandleFunction = async (req, res, next) => {
    if (req.originalUrl.startsWith('/server')) {
        const response = await fetch('https://radekclicker.radeksoft.cz' + req.originalUrl, { method: req.method });
        const resData = await response.text();
        res.statusCode = response.status;
        res.end(resData);
        console.log('forwarded', req.method, response.status, req.originalUrl);
        return;
    }

    next();
}

const httpForwardPlugin: PluginOption = {
    name: 'http-forward',
    configureServer(server) {
        server.middlewares.use(forwardOrNext);
    },
    configurePreviewServer(server) {
        server.middlewares.use(forwardOrNext);
    }
};

export default defineConfig({
    plugins: [solidPlugin(), httpForwardPlugin],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
