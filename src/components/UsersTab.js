import React, { useState } from "react"
import styled from "styled-components"
import Fab from "@material-ui/core/Fab"
import Dialog from "@material-ui/core/Dialog"
import AddUser from "./AddUser"
import AddIcon from "@material-ui/icons/Add"

import UsersList from "./UsersList"

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

export default function UsersTab() {
	const [showDialog, setShowDialog] = useState(false)

	return (
		<div>
			<UsersList />
			<FabStyled
				onClick={(e) => setShowDialog(true)}
				color="primary"
				data-testid="fab-button"
			>
				<AddIcon />
			</FabStyled>
			<Dialog open={showDialog}>
				<AddUser handleCancel={() => setShowDialog(false)} />
			</Dialog>
		</div>
	)
}
