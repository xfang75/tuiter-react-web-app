import React from "react";

const GetComment = ({comment, mentioned, position}) => {
	return [
		comment.slice(0, position),
		<span style={{"color": "rgb(59, 130, 205)"}}>
			{mentioned}
		</span>,
		comment.slice(position)

	]
}

const GetStats = ({reply, retuit, like}) => {
	return (
			<div className="row flex-nowrap p-3">
				<div className="col-3">
					<span className="ps-2 text-secondary"
								style={{"verticalAlign": "top"}}> {reply} </span>
				</div>
				<div className="col-3">
					<span className="ps-2 text-secondary"
								style={{"verticalAlign": "top"}}> {retuit} </span>
				</div>
				<div className="col-3">
					<span className="ps-2 text-secondary"
								style={{"verticalAlign": "top"}}> {like} </span>
				</div>
				<div className="col-3">
				</div>
			</div>
	)
}

const GetPanel = ({img, ttl, ctnt, link}) => {
	if(ttl === ""){
		return (
				<div className="pt-2">
					<img src= {img}
							 className="rounded-4 border"
							 width='100%'/>
				</div>
		)
	}
	else{
		return (
				<>
					<div className="pt-2">
						<img src= {img}
								 className="border"
								 style={{borderTopLeftRadius: "1rem",
									 borderTopRightRadius: "1rem"}}
								 width='100%'/>
					</div>

					<div className=" border"
							 style={{borderBottomLeftRadius: "1rem",
								 borderBottomRightRadius: "1rem"}}>
						<div className='fs-6 fw-bold pt-2 ps-3 pe-3 pb-2' >
							{ttl}
						</div>
						<div className='text-secondary ps-3 pe-3 pb-2'>
							{ctnt}
						</div>
						<div className='text-secondary ps-3 pe-3 pb-2'>
							{'\uD83D\uDD17'}
							{link}
						</div>
					</div>
				</>
		)
	}
}


const PostItem = ({post}) => {
	return (
			<li className="list-group-item">
				<div style={{display: "flex"}}>
					<div style={{flex: "1"}}>

						<div className="fw-bolder">
							{post.userName}
							&nbsp;
							&nbsp;
							<span className="text-secondary fw-normal">
                        	{post.handle} · {post.time}
                        </span>

							<span className="float-end pe-2"
										style={{"fontWeight": "800"}}>
						</span>
						</div>
						<div>
							<GetComment
									comment = {post.comment}
									mentioned = {post.mentioned}
									position= {post.mentioned_position}/>
						</div>

						<GetPanel
								img = {post.image}
								ttl = {post.title}
								ctnt = {post.content}
								link = {post.url}/>

						<GetStats
								reply = {post.reply_count}
								retuit = {post.retuit_count}
								like = {post.liked_count}/>
					</div>
				</div>
			</li>
	)
}


export default PostItem;