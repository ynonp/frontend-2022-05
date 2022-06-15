import asyncio
import logging

connected_clients_count = 0

async def client_connected_handler(reader, writer):
    global connected_clients_count
    connected_clients_count += 1
    print("Client Connected. Waiting for input")
    line = await reader.readline()
    print("Client said", line)
    writer.write(line)
    await writer.drain()
    writer.close()
    connected_clients_count -= 1

async def tcp_echo_server():
    print("Starting a server")
    server = await asyncio.start_server(client_connected_handler, host='0.0.0.0', port='8080')
    await server.serve_forever()

logging.basicConfig(level=logging.DEBUG)
asyncio.run(tcp_echo_server(), debug=False)
