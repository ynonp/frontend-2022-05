import asyncio, aiofiles

async def create_file(name):
    async with aiofiles.open(name, mode='w') as f:
        for _ in range(1_000):
            await f.write('hello async\n')
        print(f"File {name} is ready")

async def main():
    await create_file('one.txt')
    await create_file('two.txt')
    await create_file('three.txt')

asyncio.run(main(), debug=True)
