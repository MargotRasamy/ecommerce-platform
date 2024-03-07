import CategoryItem from '../category-item/category-item';
import './categories-menu.scss';

const CategoryMenu = () => {

    const categories = [
        {
          id: 1,
          title: 'Accessories',
          subtitle: 'Glasses, hats, jewelry',
          imgUrl: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 2,
          title: 'Dresses',
          subtitle: 'Mini, maxi, midi',
          imgUrl: 'https://images.unsplash.com/photo-1567966456076-905a50a06d8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 3,
          title: 'Tops',
          subtitle: 'Tank tops, crop tops, blouses',
          imgUrl: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 4,
          title: 'Bottoms',
          subtitle: 'Pants, skirts, shorts',
          imgUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    return (
        <div className="categories-menu">
            {
                categories.map((category) => (
                    <CategoryItem category={category} />
                ))
            }
        </div>
    )
}

export default CategoryMenu;