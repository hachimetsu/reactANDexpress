import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function _Accordion() {
    const $items  = [
        {
            "title":"Accordion Item #1",
            "detail": "1 1 1 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae totam minus eum sint quaerat quia, voluptas similique sit provident ipsum itaque alias.Dicta fugiat tempora, nisi commodi quod ea assumenda?"
        },
        {
            "title":"Accordion Item #2",
            "detail": "2 2 2 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae totam minus eum sint quaerat quia, voluptas similique sit provident ipsum itaque alias.Dicta fugiat tempora, nisi commodi quod ea assumenda?"
        }
    ]
    return <>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            {$items.map((item, i) => {
            return <Accordion.Item eventKey={`${i}`}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.detail}</Accordion.Body>
            </Accordion.Item>
            })}
        </Accordion>
    </>
}

