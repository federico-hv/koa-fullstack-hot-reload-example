import getRouter from 'koa-router';

const router = getRouter();

router.prefix('/api');

router.get('/message', (ctx, next) => {
    ctx.body = {
        message: 'THIS COMES FROM THE SERVER',
        // message: 'THIS IS A HOT RELOADED MESSAGE'
    };
})

export default router;