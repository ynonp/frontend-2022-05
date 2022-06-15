from aiohttp import web
import socketio

sio = socketio.AsyncServer(cors_allowed_origins='*', aync_mode='aiohttp')
app = web.Application()

sio.attach(app)

# Called when a new client connects
@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)

# Called when a client leaves
@sio.event
def disconnect(sid):
    print('disconnect ', sid)

@sio.on('message')
async def print_message(sid, message):
    print("Socket ID: " , sid)
    print(message)
    await sio.emit('message', message)

if __name__ == '__main__':
    web.run_app(app, port=8080)

