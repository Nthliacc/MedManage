import styled from "styled-components";

export const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: var(--white-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    padding: 2rem;
    margin: 2rem 0;

    caption {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    thead {
        background-color: var(--gray-color);
        color: var(--deep-blue);
        /* color: var(--white-color); */
    }
    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid var(--light-color);
        width: 54%;
    }
    tr th:first-child, tr td:first-child {
        width: 20%;
    }
    tr td:last-child {
        border-bottom: none;
        width: 30%;
        text-align: center;
        button {
            margin-right: 10px;
        }
    }
    tr th:last-child {
        text-align: center;


    }
`;