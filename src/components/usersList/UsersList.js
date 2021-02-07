import React from "react"
import {
	Checkbox,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Fab,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import styled from "styled-components"
import { useSelector } from "react-redux"

const TableHeadCellStyled = styled(TableCell)`
	background: #ced2aa;
	font-size: large;
`

const TableBodyCellStyled = styled(TableCell)`
	font-size: 14px;
`

const TableContainerStyled = styled(TableContainer)`
	margin-top: 100px;
	margin-left: 200px;
	margin-right: 200px;
`

const TableStyled = styled(Table)`
	min-width: 100px;
	margin-top: 10px;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const FabDeleteStyled = styled(Fab)`
	position: absolute;
	left: 16px;
	bottom: 16px;
`

export const UsersList = () => {
	const users = useSelector((users) => users)

	return (
		<Container>
			<TableContainerStyled component={Paper}>
				<TableStyled aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableHeadCellStyled>Name</TableHeadCellStyled>
							<TableHeadCellStyled align="right">Email</TableHeadCellStyled>
							<TableHeadCellStyled align="right">
								Date Created
							</TableHeadCellStyled>
							<TableHeadCellStyled align="right">
								Date Modified
							</TableHeadCellStyled>
						</TableRow>
					</TableHead>
					<TableBody>
						{users &&
							users.map((user) => (
								<TableRow key={user.id}>
									<TableBodyCellStyled
										component="th"
										scope="row"
										data-test-id={`name-tableCell-${user.id}`}
									>
										<Checkbox color="default" />
										{`${user.firstName} ${user.lastName}`}
									</TableBodyCellStyled>
									<TableBodyCellStyled
										align="right"
										data-test-id={`email-tableCell-${user.id}`}
									>
										{user.emailAddress}
									</TableBodyCellStyled>
									<TableBodyCellStyled align="right">
										{user.dateCreated}
									</TableBodyCellStyled>
									<TableBodyCellStyled align="right">
										{user.dateModified}
									</TableBodyCellStyled>
								</TableRow>
							))}
					</TableBody>
				</TableStyled>
			</TableContainerStyled>
			<FabDeleteStyled color="secondary" variant="round">
				<DeleteIcon />
			</FabDeleteStyled>
		</Container>
	)
}

export default UsersList
