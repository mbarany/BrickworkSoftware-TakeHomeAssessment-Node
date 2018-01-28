// import tenantMapper from './some-database-mapper';
// import {publish} from './some-queue';

function renderPixel(res) {
    const img = new Buffer("R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", 'base64');

    res.writeHead(200, {
     'Content-Type': 'image/gif',
     'Content-Length': img.length
    });
    res.end(img);
}

export default function (req, res) {
    const subdomain = req.subdomains.pop();
    console.log(`Subdomain: ${subdomain}`);

    if (subdomain) {
        const referrer = req.header('Referer');
        console.log(`Referer: ${referrer}`);
        // const tenant = tenantMapper.findOneBy({subdomain});
        // if (tenant) {
        //     publish('some-routing-key', {
        //         tenant,
        //         referrer
        //     });
        // }
    }

    renderPixel(res);
};
