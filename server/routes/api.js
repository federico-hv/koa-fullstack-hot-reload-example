import getRouter from 'koa-router';

const router = getRouter();

router.prefix('/api');

router.get('/message', (ctx, next) => {
    ctx.body = {
        message: 'HOT RELOADED MESSAGE'
    };
})

export default router;