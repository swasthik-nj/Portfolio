import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X as XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    {children}
  </DialogPrimitive.Portal>
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }
>(({ className, children, showCloseButton = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-gray-700 bg-[#1a1a1a] p-6 shadow-xl duration-200",
        // allow content to grow and be scrollable for large images
        "max-h-[90vh] overflow-auto",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          className={cn(
            "absolute top-4 right-4 rounded-md p-1.5 bg-gray-800 hover:bg-gray-700 opacity-80 hover:opacity-100 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500",
            "text-gray-300 hover:text-white"
          )}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  import * as React from "react"
  import * as DialogPrimitive from "@radix-ui/react-dialog"
  import { X as XIcon } from "lucide-react"

  import { cn } from "@/lib/utils"

  const Dialog = DialogPrimitive.Root
  const DialogTrigger = DialogPrimitive.Trigger

  const DialogPortal = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>) => (
    <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
  )
  DialogPortal.displayName = DialogPrimitive.Portal.displayName

  const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", className)}
      {...props}
    />
  ))
  DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

  const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }
  >(({ className, children, showCloseButton = true, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close className={cn("absolute top-4 right-4 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2", "ring-offset-background focus:ring-ring")}> 
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  ))
  DialogContent.displayName = DialogPrimitive.Content.displayName

  const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
    <div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />
  )
  DialogHeader.displayName = "DialogHeader"

  const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
    <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
  )
  DialogFooter.displayName = "DialogFooter"

  const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  ))
  DialogTitle.displayName = DialogPrimitive.Title.displayName

  const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ))
  DialogDescription.displayName = DialogPrimitive.Description.displayName

  export {
    Dialog,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
  }
