-- Supabase > SQL Editor > coller et exécuter
create table products(id uuid primary key default gen_random_uuid(), name text not null, description text, price int not null, image_url text, created_at timestamptz default now());
create table orders(id uuid primary key default gen_random_uuid(), product_id uuid, product_name text, quantity int, customer_name text, phone text, wilaya text, commune text, delivery_type text, delivery_price int, total int, created_at timestamptz default now());
alter table products enable row level security;
alter table orders enable row level security;
create policy "lecture publique" on products for select using (true);
create policy "admin produits" on products for all to authenticated using (true) with check (true);
create policy "passer commande" on orders for insert to anon, authenticated with check (true);
create policy "admin commandes" on orders for select to authenticated using (true);
insert into storage.buckets(id,name,public) values('products','products',true);
create policy "images publiques" on storage.objects for select using (bucket_id='products');
create policy "admin upload" on storage.objects for insert to authenticated with check (bucket_id='products');
create policy "admin suppression" on storage.objects for delete to authenticated using (bucket_id='products');
