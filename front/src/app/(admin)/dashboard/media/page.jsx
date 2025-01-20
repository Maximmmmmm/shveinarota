'use client';

import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Link from "next/link";
import DatabaseItem from "$component/dashboard/DatabaseItem/DatabaseItem";
import { useEffect, useRef, useState } from "react";
import getData, { deleteDataById } from "api";

export default function CardsPage() {
	const [media, setMedia] = useState([]);
	const [selectedMarkerId, setSelectedMarkerId] = useState(null);

	useEffect(() => {
		getData("medialinks", setMedia);
	}, []);

	return (
		<main className="main">
			<div className="modal fade" id="deleteApprove" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Підтвердження дії</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Картка буде повністю видалена!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Відмінити</button>
							<button type="button" data-bs-dismiss="modal" onClick={() => selectedMarkerId && deleteDataById("medialinks", selectedMarkerId, setMedia)} className="btn btn-outline-danger">Видалити</button>
						</div>
					</div>
				</div>
			</div>
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Медіа посилання ({media.length})</h1>
					<Link href="/dashboard/media/add" type="button" className="btn btn-success">
						<span className="_plus">+</span> Додати
					</Link>
				</div>
				<div className="list-group">
					{media.map((elem) => (
						<DatabaseItem setSelectedId={setSelectedMarkerId} key={elem.id} title={`Посилання ${elem.id} (${elem.title})`} link={`/dashboard/slides/add/${elem.id}`} id={elem.id}/>
					))}
				</div>
			</div>
			<Bootstrap/>
		</main>
	);
}