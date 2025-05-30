import axios from "axios";
import Cookies from "js-cookie";

// функція отримання карток
export async function getData(type, setData) {
	try {
		const response = await axios.get(process.env.BACK_URL + type);
		setData(response.data);
	} catch (error) {
		console.error("Помилка при отриманні даних:", error);
	}
}

export async function getEnData(type, setData) {
	try {
		const response = await axios.get(process.env.BACK_URL_EN + type);
		setData(response.data);
	} catch (error) {
		console.error("Помилка при отриманні даних:", error);
	}
}


// функція видалення карток
export async function deleteDataById(type, id, setData) {
	try {
		await axios.delete(`${process.env.BACK_URL}${type}/${id}`, {
			headers: {

			},
			withCredentials: true
		});

		setData((prevData) => prevData.filter((data) => data.id !== id));
	} catch (error) {
		console.error(`Помилка при видаленні елемента з id ${id}:`, error);
		alert("Помилка при видаленні.");
	}
}
export async function postData(type, formData, setShowAlert) {
	try {
		await axios.post(process.env.BACK_URL + type, formData, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function postDataJson(type, data, setShowAlert) {
	try {
		await axios.post(process.env.BACK_URL + type, data, {
			headers: { "Content-Type": "application/json" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function changeData(type, id, data, setShowAlert) {
	try {
		await axios.put(process.env.BACK_URL + type + "/" + id, data, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function changeJsonData(type, id, data, setShowAlert) {
	try {
		await axios.put(`${process.env.BACK_URL}${type}/${id}`, data, {
			headers: { "Content-Type": "application/json" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

// ==============================================================================================================
export async function getDataNoLang(type, setData) {
	try {
		const response = await axios.get(process.env.BACK_URL_IMG + type);
		setData(response.data);
	} catch (error) {
		console.error("Помилка при отриманні даних:", error);
	}
}

export async function deleteDataByIdNoLang(type, id, setData) {
	try {
		await axios.delete(`${process.env.BACK_URL_IMG}${type}/${id}`, {
			headers: {

			},
			withCredentials: true
		});

		setData((prevData) => prevData.filter((data) => data.id !== id));
	} catch (error) {
		console.error(`Помилка при видаленні елемента з id ${id}:`, error);
		alert("Помилка при видаленні.");
	}
}

export async function postDataNoLang(type, formData, setShowAlert) {
	try {
		await axios.post(process.env.BACK_URL_IMG + type, formData, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}

export async function changeDataNoLang(type, id, data, setShowAlert) {
	try {
		await axios.put(process.env.BACK_URL_IMG + type + "/" + id, data, {
			headers: { "Content-Type": "multipart/form-data" },
			withCredentials: true
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Помилка при відправці даних:", error);
		alert("Помилка при відправці даних.");
	}
}