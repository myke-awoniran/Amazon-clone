function dumbUser(user) {
    return {
        name: user.name,
        email: user.email,
        address: user.address,
    }
}

function dumbProduct(product) {
    return {
        productId: product._id,
        category: product.category,
        owner: product.owner,
        title: product.title,
        type: product.type,
        description: product.description,
        photo: product.photo,
        price: product.price,
        quantity: product.stock_quantity,
        rating:product.rating
    }
}