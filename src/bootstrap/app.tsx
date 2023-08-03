import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<header className='sticky top-0 p-4 border-b border-stone-300 bg-white/50 backdrop-blur-md'>
				<div className='container'>
					<a href='/' className='text-xl font-semibold'>
						template
					</a>
				</div>
			</header>
			<main className='container'>
				<div>
					{' '}
					<a
						href='https://github.com/kanadesh/vite-electron-typescript-react-tailwindcss-shadcn-template'
						target='_blank'
						className='block mt-20'
					>
						<Badge
							variant='secondary'
							className='text-base font-medium text-stone-700'
						>
							The GitHub repository is here 🎉
						</Badge>
					</a>
					<h1 className='mt-5 tracking-tight text-5xl font-extrabold'>
						Build your own apps with Shadcn UI 🔥
					</h1>
					<div className='mt-10'>
						<Dialog>
							<DialogTrigger>
								<Button variant='default'>Open Clicker</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Super Shadcn Clicker
									</DialogTitle>
									<DialogDescription>
										Please edit this and make your original
										apps!
									</DialogDescription>
								</DialogHeader>
								<Separator />
								<div className='text-center'>
									<p className='mb-10 mt-5 text-4xl font-bold'>
										{count}
									</p>
									<Button
										className='mr-2'
										onClick={() => setCount((c) => c - 1)}
									>
										Reduce
									</Button>

									<Button
										variant='destructive'
										className='font-bold mr-2'
										onClick={() => setCount(() => 0)}
									>
										x
									</Button>

									<Button
										onClick={() => setCount((c) => c + 1)}
									>
										Increase
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>
				<Separator className='my-10' />
				<div></div>
			</main>
			<footer></footer>
		</div>
	)
}

export default App
