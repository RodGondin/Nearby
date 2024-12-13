import { Text, View } from "react-native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { s } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type Props = {
  name: string;
  iconId: string;
  isSelected?: boolean;
  onPress?: () => void;
};

export function Category({ name, iconId, isSelected = false, onPress }: Props) {
  const Icon = categoriesIcons[iconId];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[s.container, isSelected && s.containerSelected]}>
        <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
        <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
