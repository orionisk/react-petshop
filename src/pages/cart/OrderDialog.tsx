import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

type OrderDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const OrderDialog = ({ open, onOpenChange }: OrderDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className='max-w-[548px] rounded-xl bg-blue-600 px-3 py-3 text-white sm:px-5 sm:py-5 lg:px-7 lg:py-7 lg:pr-24'>
      <DialogHeader className=''>
        <DialogTitle className='text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-[40px]/[1.1]'>
          Congratulations!
        </DialogTitle>
        <DialogDescription className='mt-3 grid gap-4 font-semibold text-white xs:text-lg lg:mt-6 lg:text-xl/[1.1]'>
          <span>Your order has been successfully placed on the website.</span>
          <span>A manager will contact you shortly to confirm your order.</span>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
