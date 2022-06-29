from aiohttp import web
import aiohttp
import asyncio
import socketio

sio = socketio.AsyncServer(cors_allowed_origins='*', aync_mode='aiohttp')
app = web.Application()

sio.attach(app)

@sio.on('message')
async def print_message(sid, message):
    print("Socket ID: " , sid)
    print(message)
    await sio.emit('message', message)

async def reset_loop():
    while True:
        await asyncio.sleep(5)
        await sio.emit('message', "")


async def main():
    reset = asyncio.create_task(reset_loop())

    runner = aiohttp.web.AppRunner(app)
    await runner.setup()
    site = aiohttp.web.TCPSite(runner)    
    await site.start()

    # wait forever
    await asyncio.Event().wait()
    await reset

asyncio.run(main())






