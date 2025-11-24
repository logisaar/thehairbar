-- Add table_number, payment fields, and update status enum
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS table_number integer,
ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS payment_id text;

-- Update existing bookings to have a default table number
UPDATE public.bookings 
SET table_number = 1 
WHERE table_number IS NULL;

-- Create unique constraint for slot booking (one booking per table per time slot)
CREATE UNIQUE INDEX IF NOT EXISTS unique_table_slot 
ON public.bookings(table_number, booking_date, booking_time)
WHERE status NOT IN ('cancelled', 'rejected');

-- Update status default to 'pending' for new bookings
ALTER TABLE public.bookings 
ALTER COLUMN status SET DEFAULT 'pending';