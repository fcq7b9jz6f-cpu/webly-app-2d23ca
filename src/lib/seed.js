// script to seed products into the basic datastore
export const seedProducts = async () => {
    const defaultProducts = [
        { title: 'جاكيت شتوي أنيق', description: 'جاكيت رجالي مبطن يوفر الدفء والأناقة في نفس الوقت.', price: 299.99, category: 'رجالي', image_url: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg' },
        { title: 'فستان سهرة كلاسيكي', description: 'فستان نسائي طويل مناسب للمناسبات الخاصة.', price: 349.50, category: 'حريمي', image_url: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg' },
        { title: 'طقم أطفال مريح', description: 'طقم قطني مريح للأطفال للاستخدام اليومي.', price: 120.00, category: 'أطفال', image_url: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg' },
        { title: 'نظارة شمسية كلاسيك', description: 'نظارة بعدسات مستقطبة تعطي مظهراً جذاباً.', price: 85.00, category: 'إكسسوارات', image_url: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg' }
     ];

    try {
        const response = await fetch('/api/data/products');
        const existing = await response.json();
        
        if (existing && existing.length === 0) {
            console.log("Seeding initial products to database...");
            for (const prod of defaultProducts) {
                await fetch('/api/data/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(prod)
                });
            }
        }
    } catch (e) {
        console.error("Failed to seed:", e);
    }
}
