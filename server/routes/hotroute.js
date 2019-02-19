import getRouter from 'koa-router';

const router = getRouter();

router.prefix('/hotroute');

router.get('/', (ctx, next) => {
    ctx.body = {
        message: 'THIS IS A HOT RELOADED ROUTE'
    };
})

export default router;