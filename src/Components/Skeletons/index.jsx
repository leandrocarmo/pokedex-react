import { Container, Skeleton } from '@mui/material';
import React from 'react';

export function Skeletons() {
    return (
        <Container macWidth='xxl'>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
            <Skeleton variant="rounded" width='100%' height={150} sx={{marginBottom:'1em'}}/>
        </Container>
    );
}