---
title: "Property recommendation via K-Means clustering"
description: "In a real estate system, related properties needed to be shown on the detail page. K-Means clustering was implemented in an asynchronous Python/Flask service."
category: "Backend / ML"
technologies:
  - JavaScript
  - Express.js
  - Python
  - Flask
  - scikit-learn
featured: true
diagram: "property-clustering"
---

## Context

In a real estate platform (Express.js backend), property detail pages needed to show related/similar properties to improve user engagement and discovery.

## Problem

No automated way to determine which properties were similar. Manual tagging was unmaintainable at scale.

## Approach

Implemented an asynchronous ML pipeline to compute property similarity clusters:

1. **Trigger**: When a property is created or updated, an async process starts
2. **Processing**: The process calls a Python/Flask service, sends the property data
3. **Clustering**: The service applies K-Means on all properties and returns cluster assignments
4. **Storage**: Each property receives its cluster number, stored in the database

The clustering uses k = number of related properties to display per page. With p total properties, the algorithm groups them into k clusters, so each property gets a cluster number. The frontend then queries properties sharing the same cluster to show as related.

## Solution

**Architecture:**
- **Express.js API**: Handles property CRUD, triggers async clustering on create/update
- **Python/Flask Service**: Receives property data, runs K-Means clustering, returns cluster assignments
- **Database**: Stores cluster number on each property record

**Clustering Logic:**
- Features: price, location (lat/lon), size, bedrooms, bathrooms, property type, amenities
- K-Means with k = desired related properties per page (typically 4-6)
- Runs on full dataset to ensure consistent cluster assignments
- Async execution keeps property writes fast

**Flow:**
1. Property created/updated via Express API
2. Async process triggered, sends data to Python service
3. Service runs K-Means on all properties, returns { propertyId: clusterId }
4. Express API updates each property's cluster field
5. Frontend shows related properties by querying same cluster

## Result

Related properties are now automatically determined by similarity without manual curation. The async pipeline keeps property writes responsive while the ML service computes clusters in the background.