-- Supabase > SQL Editor > New snippet > coller > Run (une seule fois)
alter table products add column if not exists images text[] default '{}';
alter table products add column if not exists category text;
alter table products add column if not exists old_price int;
update products set images = array[image_url] where image_url is not null and (images is null or images = '{}');
update products set category = 'pyjamas' where category is null;
