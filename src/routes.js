import pixelTrackingController from './controllers/pixelTrackingController';

export default function (app) {
    app.get('/tracking/track.gif', pixelTrackingController);
};
