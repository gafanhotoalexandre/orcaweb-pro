'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import EmojiPicker from 'emoji-picker-react'
import { useUser } from '@clerk/nextjs'

import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { createBudget } from '@/lib/actions/budget.actions'
import { User } from '@clerk/nextjs/server'
import { toast } from 'sonner'

export function CreateBudget() {
  const user = useUser().user as unknown as User

  const [emojiIcon, setEmojiIcon] = useState('😊')
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  const [budgetName, setBudgetName] = useState('')
  const [budgetAmount, setBudgetAmount] = useState('')

  async function handleCreateBudget() {
    const newBudget = await createBudget({
      name: budgetName,
      amount: Number(budgetAmount),
      icon: emojiIcon,
      email: user.primaryEmailAddress?.emailAddress!,
    })

    if (newBudget) {
      toast.success('Novo Orçamento Criado!')
    }
  }

  return (
    <section>
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="bg-slate-100 p-10 rounded-md flex flex-col items-center border-2 border-dashed cursor-pointer hover:shadow-md transition">
            <span>
              <Plus />
            </span>
            <h3>Criar Novo Orçamento</h3>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Novo Orçamento</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  className="text-xl"
                  variant={'outline'}
                >
                  {emojiIcon}
                </Button>

                <div className="absolute mt-2 z-10">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji)
                      setOpenEmojiPicker(false)
                    }}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="budget-name"
                    className="text-black font-medium my-1"
                  >
                    Nome do Orçamento:
                  </label>
                  <Input
                    id="budget-name"
                    type="text"
                    required
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)}
                    placeholder="ex: Decoração de Casa"
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="budget-amount"
                    className="text-black font-medium my-1"
                  >
                    Valor do Orçamento:
                  </label>
                  <Input
                    id="budget-amount"
                    type="number"
                    required
                    value={budgetAmount}
                    onChange={(e) => setBudgetAmount(e.target.value)}
                    placeholder="ex: R$500"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-full"
                disabled={!(budgetName && budgetAmount)}
                onClick={handleCreateBudget}
              >
                Criar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
