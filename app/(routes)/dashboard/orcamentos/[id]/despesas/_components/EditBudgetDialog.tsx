'use client'

import { useState } from 'react'

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
import { Edit, XIcon } from 'lucide-react'
import EmojiPicker from 'emoji-picker-react'
import { Input } from '@/components/ui/input'
import { updateBudget } from '@/lib/actions/budget.actions'
import { toast } from 'sonner'

interface EditBudgetDialogProps {
  budget: Budget
}
export function EditBudgetDialog({ budget }: EditBudgetDialogProps) {
  const [emojiIcon, setEmojiIcon] = useState<string>(budget.icon!)
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false)

  const [budgetName, setBudgetName] = useState<string>(budget.name!)
  const [budgetAmount, setBudgetAmount] = useState<string>(
    budget.amount! as string
  )

  async function handleUpdateBudget() {
    const updatedBudget = await updateBudget({
      budgetId: budget.id,
      name: budgetName,
      amount: budgetAmount,
      icon: emojiIcon,
    })

    if (updatedBudget) {
      toast.success('Orçamento atualizado com sucesso')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="space-x-2">
          <Edit />
          <span>Editar</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Orçamento</DialogTitle>
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
              onClick={handleUpdateBudget}
            >
              Atualizar Orçamento
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
