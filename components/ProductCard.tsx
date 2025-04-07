import React from "react";

// Simple Product Card Component
type ProductCardProps = {
	productName: string;
	price: number;
	imageUrl: string;
	darkMode?: boolean;
	className?: string;
};

function ProductCard({
	productName,
	price,
	imageUrl,
	darkMode,
	className,
}: ProductCardProps) {
	return (
		<div
			className={`${className} ${darkMode ? "dark-mode" : ""}`}
			style={styles.card}>
			<img
				src={imageUrl}
				alt={productName}
				style={styles.image}
			/>
			<h2 style={styles.title}>{productName}</h2>
			<p style={styles.price}>${price}</p>
		</div>
	);
}

// Inline styles for basic styling
const styles: { [key: string]: React.CSSProperties } = {
	card: {
		border: "1px solid #ddd",
		borderRadius: "8px",
		padding: "16px",
		maxWidth: "250px",
		textAlign: "center",
		backgroundColor: "white",
	},
	image: {
		width: "100%",
		height: "150px",
		objectFit: "cover",
		borderRadius: "8px",
	},
	title: {
		fontSize: "18px",
		margin: "10px 0",
	},
	price: {
		color: "green",
		fontWeight: "bold",
	},
};

// Export the component so it can be used in other files
export default ProductCard;
