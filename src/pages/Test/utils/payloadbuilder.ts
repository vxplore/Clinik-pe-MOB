import type { AddTestPayload } from "../../../apis/modules/tests/tests.types";

interface CartItemForPayload {
    uid: string;
    type: string;
    sub_type: string;
}
export const buildAddTestPayload = (
    cartItems: CartItemForPayload[]
): AddTestPayload => {
    return {
        items: cartItems.map((item) => ({
            item_id: item.uid,
            type: item.type,
            sub_type: item.sub_type,
        })),
    };
};
