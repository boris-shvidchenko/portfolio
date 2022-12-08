# Portfolio
All code for my personal website/portfolio will be stored here. 

vercel.json
{
    "version": 2,
    "name": "portfolio",
    "builds": [
        {"src":"_app.js", "use": "@vercel/node"}
    ],
    "routes": [
        {"src": "/(.*)", "dest": "/_app.js"}
    ]
}
