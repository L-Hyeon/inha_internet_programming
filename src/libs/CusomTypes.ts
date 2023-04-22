export interface ItemType {
	id: number;
	title: string;
	thumbnail: string;
	price: number;
	category: string;
	brand: string;
	rating: number;
}

export interface ItemDetailType {
	id: number;
	title: string;
	thumbnail: string;
	price: number;
	category: string;
	brand: string;
	rating: number;
	description: string;
	discountPercentage: number;
	stock: number;
	images: string[];
}
