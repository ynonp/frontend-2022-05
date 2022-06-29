from aiohttp import web
import socketio

sio = socketio.AsyncServer(cors_allowed_origins='*', aync_mode='aiohttp')
app = web.Application()

sio.attach(app)

links = [
        { "href": "https://duckduckgo.com/", "likes": 7 }
        ]

def write_to_file():
    pass

def read_from_file():
    pass


# Called when a new client connects
@sio.event
async def connect(sid, environ, auth):
    await sio.emit('links', links)
    print('connect ', sid)

# Called when a client leaves
@sio.event
async def disconnect(sid):
    print('disconnect ', sid)

@sio.event
async def share(sid, href):
    print(f"User {sid} shared {href}")
    links.append({ "href": href, "likes": 1 })
    write_to_file()
    await sio.emit('links', links)

@sio.event
async def like(sid, href):
    print(f"User {sid} likes {href}")
    for l in links:
        if l["href"] == href:
            l["likes"] += 1
    write_to_file()
    await sio.emit('links', links)

@sio.event
async def unlike(sid, href):
    print(f"User {sid} unlikes {href}")
    for l in links:
        if l["href"] == href:
            l["likes"] -= 1
    write_to_file()
    await sio.emit('links', links)



if __name__ == '__main__':
    read_from_file()
    web.run_app(app, port=8080)

