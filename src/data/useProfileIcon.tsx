import {useContext} from "react";
import {VersionContext} from "../store/VersionContext";

export const useProfileIcon = (id: number | string) => {
	const version = useContext(VersionContext);
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${id}.png`;
}
