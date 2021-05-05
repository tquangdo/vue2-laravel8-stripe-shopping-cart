<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(10)->create();
        Category::factory(5)->create();
        Order::factory(2)->create();

        $categories = Category::all();
        Product::all()->each(function ($product) use ($categories) {
            $product->categories()->attach(
                $categories->random(2)->pluck('id')->toArray()
                // category_product.category_id/product_id
                // $categories->random(2): ở trên phải tạo Category::factory(5>2)
            );
        });

        $orders = Order::all();
        Product::all()->each(function ($product) use ($orders) {
            $orderIds = $orders->random(2)->pluck('id')->toArray();
            // order_product.order_id/product_id
            // $orders->random(2): ở trên phải tạo Order::factory(2=2)
            foreach ($orderIds as $orderId) {
                $product->orders()->attach($orderId, ['quantity' => rand(1, 5)]);
            }
        });
    }
}
