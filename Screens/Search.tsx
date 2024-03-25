import React from "react";
import { Text, View } from "react-native";
import ItemsList from "./ItemsList";

const Search = ({navigation}) => {
    return (
        <ItemsList navigation={navigation}></ItemsList>
    );
};

export default Search;