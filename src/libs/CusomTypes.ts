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

export interface Subject {
	id: number;
	title: string;
	day: number;
	startTime: number;
	endTime: number;
	professor: number;
	place: string;
}

export interface SubjectDetail {
	id: number;
	title: string;
	day: number;
	startTime: number;
	endTime: number;
	professor: number;
	place: string;
	createTime: string;
	syllabus: string;
}
