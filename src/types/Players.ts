type PositionName =
	| "arquero"
	| "defensor"
	| "volante"
	| "delantero"
	| "director técnico"
	| "ayudante de campo"

export interface Players {
    name: String,
	lastName: String,
    position: PositionName,
    dorsal: number
}